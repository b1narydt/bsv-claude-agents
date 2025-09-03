#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const simpleGit = require('simple-git');

const CLAUDE_DIR = path.join(os.homedir(), '.claude');
const AGENTS_DIR = path.join(CLAUDE_DIR, 'agents');
const REPO_DIR = path.join(CLAUDE_DIR, 'bsv-claude-agents');
const REPO_URL = 'https://github.com/bsv-blockchain/bsv-claude-agents.git';

// For testing, use local repo if --local flag is provided
const isLocal = process.argv.includes('--local');
const LOCAL_REPO = process.cwd();

async function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

async function cloneOrUpdateRepo() {
  if (isLocal) {
    console.log('Using local repository for testing...');
    // Copy local repo to the target directory
    if (fs.existsSync(REPO_DIR)) {
      fs.rmSync(REPO_DIR, { recursive: true, force: true });
    }
    fs.cpSync(LOCAL_REPO, REPO_DIR, { recursive: true });
    console.log('Local repository copied successfully!');
    return;
  }

  const git = simpleGit();
  
  if (fs.existsSync(REPO_DIR)) {
    console.log('Updating existing BSV Claude Agents repository...');
    const repoGit = simpleGit(REPO_DIR);
    await repoGit.pull();
    console.log('Repository updated successfully!');
  } else {
    console.log('Cloning BSV Claude Agents repository...');
    await git.clone(REPO_URL, REPO_DIR);
    console.log('Repository cloned successfully!');
  }
}

async function createSymlinks() {
  const agentsSourceDir = path.join(REPO_DIR, 'agents');
  
  if (!fs.existsSync(agentsSourceDir)) {
    console.error('Agents directory not found in cloned repository');
    return;
  }

  await ensureDirectoryExists(AGENTS_DIR);

  const agentFiles = fs.readdirSync(agentsSourceDir).filter(file => 
    file.endsWith('.md') && file.includes('bsv')
  );

  for (const file of agentFiles) {
    const sourcePath = path.join(agentsSourceDir, file);
    const targetPath = path.join(AGENTS_DIR, file);

    // Remove existing file or symlink
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
      console.log(`Removed existing: ${targetPath}`);
    }

    // Create symlink
    fs.symlinkSync(sourcePath, targetPath);
    console.log(`Created symlink: ${targetPath} -> ${sourcePath}`);
  }
}

async function main() {
  try {
    console.log('🚀 Setting up BSV Claude Agents...');
    
    await ensureDirectoryExists(CLAUDE_DIR);
    await cloneOrUpdateRepo();
    await createSymlinks();
    
    console.log('✅ BSV Claude Agents setup completed successfully!');
    console.log(`Agents are now available in: ${AGENTS_DIR}`);
  } catch (error) {
    console.error('❌ Error setting up BSV Claude Agents:', error.message);
    process.exit(1);
  }
}

main();