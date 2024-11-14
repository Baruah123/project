# Project - Business Solutions Website

A modern, responsive web application built with React, TypeScript, and Tailwind CSS, featuring user authentication, dashboard functionality, and various business-related features.

## 🚀 Features

- **User Authentication**
  - Login/Signup functionality
  - Protected routes
  - Session management

- **Dashboard**
  - Interactive sidebar navigation
  - Master data management
    - Gender Master
    - Country Master
    - State Master
    - City Master
  - Reports section
  - Password management

- **Public Pages**
  - Home page with company overview
  - About page with company history and values
  - Contact page with form submission
  - Responsive footer with quick links

- **Modern UI/UX**
  - Dark theme
  - Smooth animations and transitions
  - Interactive elements
  - Gradient effects
  - Responsive design

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router v6
- Lucide Icons
- Context API for state management

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Baruah123/project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Project
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

## Directory Structure

src/
├── components/
│ ├── Navbar.tsx
│ └── ProtectedRoute.tsx
├── context/
│ └── AuthContext.tsx
├── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ ├── Contact.tsx
│ ├── Login.tsx
│ ├── Signup.tsx
│ └── Dashboard.tsx
├── App.tsx
└── main.tsx 


## 🔐 Authentication

The application uses a context-based authentication system. Protected routes are wrapped with the `ProtectedRoute` component, which redirects unauthorized users to the login page.

## 💻 Dashboard Features

- **Master Data Management**
  - Gender Master: Manage gender-related data
  - Country Master: Handle country information
  - State Master: Manage state/province data
  - City Master: Handle city information

- **Reports**: Generate and view various business reports
- **Password Management**: Change password functionality

## 🎨 Styling

The application uses Tailwind CSS for styling with:
- Custom color schemes
- Responsive design
- Dark theme
- Interactive animations
- Gradient effects

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🔧 Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any queries, please reach out to:
- Email: contact@abcindia.com
- Phone: +91 1234567890
- Address: Bangalore, India

## 🙏 Acknowledgments

- Icons by Lucide Icons
- UI inspiration from modern web design trends
- All contributors who helped in the development

---

Made with ❤️ by Avoy Baruah
