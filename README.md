<p align="center">
    <img src="./src/assets/fashnet-logo.png" />
</p>

# FashNet

The Fashnet is an innovative application that uses AI to create personalized fashion recommendations. Users input preferences and style choices in a general conversational way, and the AI generates unique outfit suggestions, considering trends, colors, and occasions. As users engage, the AI refines its suggestions, offering a creative way to explore fashion and even find shopping options.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Here are the steps you need to do:

1. **Clone the repository** in your system, by using this command in your Git bash/Command Prompt. <br />
   ```bash
   git clone https://github.com/The-Aftermath-of-StackOverflow/fashnest.git
   ```

2. In the project directory, go to `server` folder and run the following command in terminal: 
   ```bash
   npm install
   ```

3. Add the `.env.local` file in the following format:
    ```
    GOOGLE_CLIENT_ID="<Your_Google_API_Client_ID>"
    GOOGLE_CLIENT_SECRET="<Your_Google_API_Client_Secret>"
    MONGODB_URI="<Your_MongoDB_Database_Connection_URL>"
    NEXTAUTH_SECRET="<JWT_Key_Token>"
    NEXTAUTH_URL="http://localhost:3001"
    ADMIN_EMAIL="<Admin_Email_ID>"
    ADMIN_PASSWORD="<Admin_Password>"
    NEXT_PUBLIC_BACKEND_URL="<Backend_URL>"
    ```

4. Then, run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
