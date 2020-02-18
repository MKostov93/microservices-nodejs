/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";

/**
 * COMPONENTS.
 */
import PrefetchLink from "hoc/PrefetchLink/PrefetchLink";

const About = () => {
  return (
    <div>
      <p>About page</p>

      <PrefetchLink to="/">Listing</PrefetchLink>
    </div>
  );
};

export default About;
