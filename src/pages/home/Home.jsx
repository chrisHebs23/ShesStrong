import React, { Suspense } from "react";
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const BookingSection = React.lazy(() => import("./components/BookingSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const GallerySection = React.lazy(() => import("./components/GallerySection"));
const ReviewsSection = React.lazy(() => import("./components/ReviewsSection"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <div className="bg-hero-image w-full h-screen bg-cover bg-center ">
        <BookingSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
      </div>
    </Suspense>
  );
};

export default Home;
