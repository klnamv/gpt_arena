# Contributing to GPT arena ⚡️

First off, thanks for taking the time to contribute GPT arena 🤍
This document provides guidelines and instructions to help you contribute effectively.

## Setting Up Your Development Environment 👩🏻‍💻

To get started, you'll need to have a few tools installed on your machine:

1. **Node.js and npm**: Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

2. **Clone the repository**: Use the following Git command to clone the repository:
`git clone https://github.com/klnamv/gpt_arena.git`

3. **Install dependencies**: Navigate to the project directory and run: 
`npm install`

4. **Environment variables**: Set up the necessary environment variables:
- Create a `.env` file in the root of your project.
- Add `REACT_APP_OPENAI_API_KEY='your-api-key-here'`.

5. **Start the development server**:
`npm run start`

6. **Visit `http://localhost:3000`** in your browser to see the app running.

## OpenAI API Key 🔐
To interact with the GPT models, an API key from OpenAI is required. This key enables your application to authenticate requests to OpenAI's services, ensuring that usage is secure and measured.

**Acquiring an API Key**
1. Create an account at OpenAI.
2. Navigate to the API section and generate a new API key.
3. Once you have your key, you will use it in your environment file to authenticate API requests from your application.

## Code Contributions 🌱

When contributing code, please follow these guidelines:

- **Branching**: Always create a new branch for your work.
- **Code Style**: Follow the existing code style. Use prettier and ESLint to ensure your code lints correctly.
- **Documentation**: Update documentation to reflect any changes or additions you make.
- **Testing**: Add tests for new features and ensure all tests pass before submitting a pull request.

## Submitting Changes 📝

After you've made your changes:

1. Push your branch to GitHub.
2. Create a Pull Request (PR) against the `main` branch of the `gpt_arena` repository.
3. Ensure your PR description clearly describes the problem and solution. Include any relevant issue numbers.

## Reporting Bugs 🪲

When reporting bugs:

- Use the GitHub Issues page for the `gpt_arena` repository.
- Clearly describe the issue, including steps to reproduce the bug.
- Include screenshots if possible.

## Feature Requests 

Feel free to submit feature requests through GitHub Issues. Describe what you would like to see, why it is important, and how it can be implemented.

## Questions or Problems?

Don't hesitate to create an issue in the repository or reach out directly if you have any questions about contributing.

Thank you for your contributions, and let’s make GPT arena even better together!