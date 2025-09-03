# @bsv/bsv-claude-agents - BSV Claude Agents Installer

[![NPM Version](https://img.shields.io/npm/v/@bsv/bsv-claude-agents)](https://www.npmjs.com/package/@bsv/bsv-claude-agents)
[![License: Open BSV](https://img.shields.io/badge/License-Open%20BSV-blue.svg)](https://github.com/bsv-blockchain/bsv-claude-agents/blob/main/LICENSE)

This package provides BSV (Bitcoin SV) expert Claude agents for Claude Code. It automatically installs and manages BSV blockchain development agents that provide specialized knowledge and assistance for BSV application development.

## Features

- **Easy Installation**: One-command setup via npx
- **Expert BSV Agents**: Specialized agents for BSV TypeScript SDK and wallet toolbox
- **Automatic Updates**: Re-run the command to update agents
- **Symlink Management**: Clean installation and removal of agent files

## Quick Start

Install or update BSV Claude agents:

```bash
npx bsv-claude-agents
```

That's it! The BSV agents are now available in your Claude Code interface.

## What Gets Installed

This package installs the following BSV expert agents:

### BSV Blockchain TypeScript SDK Expert
- **File**: `bsv-blockchain-ts-sdk-expert.md`
- **Expertise**: Transaction building, script creation, SPV verification, merkle proofs, ARC broadcasting, and BRC standards
- **Use Cases**: Building BSV applications with TypeScript/JavaScript, P2PKH templates, custom scripts, fee calculation

### BSV Blockchain Wallet Toolbox Expert  
- **File**: `bsv-blockchain-wallet-toolbox-expert.md`
- **Expertise**: Wallet functionality, transaction creation, key management, address generation, UTXO handling
- **Use Cases**: Implementing BSV wallet features, transaction signing, UTXO management, BRC-100 compliance

## How It Works

1. **Clones Repository**: Downloads the latest BSV agents from GitHub
2. **Creates Symlinks**: Links agent files to your `~/.claude/agents/` directory  
3. **Preserves Updates**: Maintains connection to source repository for easy updates
4. **Clean Management**: Handles existing files and provides clean installation

The agents are installed as symlinks from `~/.claude/bsv-claude-agents/agents/` to `~/.claude/agents/`, allowing for easy updates and management.

## Requirements

- **Node.js**: Version 14 or higher
- **Git**: Required for cloning the agents repository
- **Claude Code**: The agents are designed for use with Claude Code

### Windows Users
The package is fully compatible with Windows! The CLI automatically detects your operating system and uses the appropriate linking method:
- **Windows**: Uses hard links (no administrator privileges required)
- **macOS/Linux**: Uses symbolic links (standard approach)

If you encounter permission issues on Windows, you can:
- Enable Developer Mode in Windows Settings → Update & Security → For developers
- Or run the command as administrator (not recommended for regular use)

## Update Agents

To update your BSV agents to the latest version, simply run the installation command again:

```bash
npx bsv-claude-agents
```

This will pull the latest changes and update your local agent files.

## Development

For local development and testing:

```bash
git clone https://github.com/bsv-blockchain/bsv-claude-agents.git
cd bsv-claude-agents
node bin/cli.js --local
```

## Troubleshooting

### Windows Issues
If you encounter linking errors on Windows:
1. **Try Developer Mode**: Enable Developer Mode in Windows Settings
2. **Check File System**: Ensure you're using NTFS (required for hard links)
3. **Fallback Mode**: The CLI automatically falls back to file copying if linking fails

### General Issues
- **Git not found**: Ensure Git is installed and available in your PATH
- **Permission errors**: Check that you have write access to `~/.claude/` directory
- **Node.js version**: Verify you're using Node.js 14 or higher

## Support

- **Documentation**: [BSV Blockchain Documentation](https://docs.bsvblockchain.org/)
- **Issues**: [GitHub Issues](https://github.com/bsv-blockchain/bsv-claude-agents/issues)
- **Community**: [BSV Developer Community](https://discord.gg/bsv)

## License

This project is licensed under the Open BSV License - see the [LICENSE](LICENSE) file for details.