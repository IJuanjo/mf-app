# Module Federation with RSBuild

This project is an example implementation of **Module Federation** using **RSBuild** as bundler and **React** as frontend framework. The application demonstrates how to share components between micro-frontends efficiently.

## 🏗️ Architecture

The project is structured as a monorepo with two main applications:

- **`shell-web`** (Host) - Port 3001: Container application that consumes remote components
- **`mf-web`** (Remote) - Port 3002: Application that exposes components to be consumed

```
mf-mnr-rsb/
├── apps/
│   ├── mf-web/          # Remote app - Exposes components
│   └── shell-web/       # Host app - Consumes remote components
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## 🚀 Technologies

- **RSBuild** - Fast bundler based on Rspack
- **Module Federation** - Micro-frontend architecture
- **React 19** - Frontend framework
- **TypeScript** - Static typing
- **PNPM** - Package manager and workspace

## 📋 Prerequisites

- Node.js >= 18
- PNPM >= 8

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mf-mnr-rsb
```

2. Install dependencies:
```bash
pnpm install
```

## 🏃‍♂️ Execution

### Development

To run both applications in development mode:

```bash
# Run all applications
pnpm dev

# Or run individually
pnpm --filter mf-web dev    # Remote on port 3002
pnpm --filter shell-web dev # Host on port 3001
```

### Recommended execution order

1. **First start the remote** (mf-web):
```bash
pnpm --filter mf-web dev
```

2. **Then start the host** (shell-web):
```bash
pnpm --filter shell-web dev
```

### Access URLs

- **Host Application**: http://localhost:3001
- **Remote Application**: http://localhost:3002
- **Remote Entry**: http://localhost:3002/remoteEntry.js

## 🔧 Module Federation Configuration

### Remote Application (mf-web)

The remote application exposes components to be consumed:

```typescript
// apps/mf-web/module-federation.config.ts
export default createModuleFederationConfig({
  name: 'remote',
  exposes: {
    './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
```

### Host Application (shell-web)

The host application consumes remote components:

```typescript
// apps/shell-web/module-federation.config.ts
export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
```

## 📝 Available Scripts

### Workspace Root

- `pnpm dev` - Runs all applications in development mode

### Per Application

- `pnpm build` - Builds the application for production
- `pnpm dev` - Runs in development mode
- `pnpm preview` - Previews the production build

## 🏗️ Production Build

```bash
# Build all applications
pnpm --filter mf-web build
pnpm --filter shell-web build

# Or build a specific application
pnpm --filter <app-name> build
```

## 🔍 File Structure

```
apps/
├── mf-web/                          # Remote Application
│   ├── src/
│   │   ├── Button.tsx              # Exposed component
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── module-federation.config.ts # MF Configuration
│   ├── rsbuild.config.ts          # RSBuild Configuration
│   └── package.json
└── shell-web/                      # Host Application
    ├── src/
    │   ├── App.tsx                 # Consumes remote component
    │   └── index.tsx
    ├── @mf-types/                  # Generated TypeScript types
    ├── module-federation.config.ts # MF Configuration
    ├── rsbuild.config.ts          # RSBuild Configuration
    └── package.json
```

## 🎯 Features

- ✅ **Hot Module Replacement** - Hot reload during development
- ✅ **TypeScript Support** - Full typing with automatic type generation
- ✅ **Shared Dependencies** - React and React-DOM shared between applications
- ✅ **Development Mode** - Local development with live reload
- ✅ **Production Ready** - Optimized for production

## 🔧 Troubleshooting

### Common issues

1. **Remote connection error**:
   - Verify that the remote application is running on port 3002
   - Confirm that the remote URL in configuration is correct

2. **Shared dependencies issues**:
   - Make sure React versions are compatible
   - Verify `singleton: true` configuration in shared dependencies

3. **TypeScript errors**:
   - Types are automatically generated in `@mf-types`
   - Restart the development server if types don't update

### Useful commands

```bash
# Clean node_modules and reinstall
pnpm clean
pnpm install

# Check workspace configuration
pnpm list --depth=0

# View detailed logs
pnpm --filter <app-name> dev --verbose
```

## 📚 Additional Resources

- [RSBuild Documentation](https://rsbuild.dev/)
- [Module Federation Documentation](https://module-federation.github.io/)
- [React Documentation](https://react.dev/)
- [PNPM Workspaces](https://pnpm.io/workspaces)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License. See the `LICENSE` file for more details.
