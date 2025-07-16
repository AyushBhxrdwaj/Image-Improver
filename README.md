# AI Image Enhancer

<p align="center">
  <em>A modern web tool that uses AI to upscale and enhance low-resolution images with a single click.</em>
</p>

---

**AI Image Enhancer** is a sleek, responsive web application built with React and Tailwind CSS that allows users to breathe new life into their low-quality images. By leveraging the power of the PickWish AI image enhancement API, this tool can intelligently upscale resolution, reduce noise, and sharpen details, providing a high-resolution output from a low-quality source.

The interface provides a live, side-by-side preview to instantly compare the original image with its AI-enhanced version, complete with a one-click download button for the final result.

## ✨ Key Features

-   **🖼️ Image Upload**: Easily upload low-resolution or poor-quality images (`.jpg`, `.png`, etc.).
-   **🤖 AI-Powered Upscaling**: Utilizes an advanced AI API to enhance image resolution and quality.
-   **🔍 Live Preview**: Instantly compare the original image with the enhanced version in a side-by-side viewer.
-   **🖱️ One-Click Download**: Download the high-resolution, enhanced image directly to your device.
-   **📱 Responsive Design**: A clean, modern UI built with Tailwind CSS that works beautifully on both desktop and mobile devices.
-   **⚙️ Status Indicators**: Clear loading and error handling states to keep the user informed throughout the enhancement process.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://react.dev/) (with [Vite](https://vitejs.dev/) for a fast development experience)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Service**: [PickWish API](https://www.pickwish.com/api-docs)

## 🚀 Getting Started

Follow these instructions to set up and run a local copy of the project.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or later)
-   `npm` or `yarn`
-   A PickWish API Access Token

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/AyushBhxrdwaj/ai-image-enhancer.git
    ```

2.  **Navigate into the project directory:**
    ```sh
    cd ai-image-enhancer
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Set up your environment variables:**
    Create a new file named `.env` in the root of your project.

    > **Important Note on API Key:**
    > This project uses the **PicWish API**, which operates on a credit-based system. Each image enhancement consumes credits from the account associated with the API key. To run this project, you **must** obtain your own API Access Token from [PicWish](https://picwish.com/photo-enhancer-api) and add it to your environment.

    Open the `.env` file and add your API token like this:
    ```env
    VITE_PICKWISH_API_TOKEN="your_personal_api_access_token_here"
    ```

## 🏃‍♂️ How to Run the Application

To start the development server, run the following command:

```sh
npm run dev
```

Open your browser and navigate to the local URL provided (usually `http://localhost:5173`) to see the application in action.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, please feel free to fork the repository and open a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


