# Internship Assessment Project

This project is a responsive web application created using React and Vite. It is designed to adapt seamlessly across various screen sizes, including laptops, phones, tablets, and large monitors in both portrait and landscape orientations.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies by running:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. To build the project for production:
   ```bash
   npm run build
   ```
5. To preview the production build:
   ```bash
   npm run preview
   ```

## Features

- **Responsive Layouts**: All screens are responsive and tested on laptops, phones, tablets, and large monitors (both portrait and landscape).
- **Rich Text Editor**: Integrated `react-quill` for a text editor with basic customization.
- **Custom Inputs with Icons**: Input fields and select boxes are enhanced with contextually relevant icons sourced from `react-icons`, ensuring intuitive user interaction.

## Development Journey

### Timeline

- **Day 1-2**: Completed all layouts.
- **Day 3**: Made the application fully responsive, tested across all devices and orientations, and submitted the project.
  
### Challenges

1. **Customizing React-Quill**:
   - Limited customization options made it challenging to match the desired design.
   - A `findDOMNode` deprecation warning occurs due to `react-quill`. This warning can be ignored as it does not affect the functionality.

2. **Dropdown with Country Selector**:
   - Due to using `react-icons`, only one flag icon was available for the mobile number dropdown.

3. **Custom Inputs and Select Boxes**:
   - Limited customization options made styling input fields and select boxes slightly restrictive.

## Acknowledgments

Thank you for taking the time to review my project. I hope you find my work meets the expectations for this internship assessment.
