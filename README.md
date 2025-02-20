# Rotating Torus with Three.js

A simple Three.js project that renders a rotating torus with directional lighting.

## Demo

This project creates a 3D torus that rotates continuously using Three.js. The scene includes basic lighting and a background color.

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:camrynbrown/threejs-practice.git
   cd threejs-practice
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npx vite
   ```

## Requirements

- Node.js and npm installed
- A modern web browser that supports WebGL

## Technologies Used

- [Three.js](https://threejs.org/) for rendering 3D graphics
- [Vite](https://vitejs.dev/) for fast development and bundling
- HTML5 & JavaScript

## Features

- Rotating torus geometry
- Directional lighting for shading effects
- Responsive rendering based on window size

## Code Overview

- **Scene Setup:** Creates a Three.js scene with a background color.
- **Camera:** Perspective camera positioned at `z = 5`.
- **Geometry & Material:** A torus with Lambert material and emissive lighting.
- **Lighting:** A directional light to illuminate the torus.
- **Animation Loop:** Updates the torus rotation on the X and Y axes.

## How to Run

Run the following command to start the local development server:
```sh
npx vite
```
Then open `http://localhost:5173` in your browser.



