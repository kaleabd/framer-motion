# Learning Framer Motion

This is a record of my journey learning Framer Motion, a powerful animation library for React. 

## Getting Started

To start using Framer Motion, simply install it using npm:

```
npm install framer-motion
```


## Adding Animation to Components

Adding animation to a component in Framer Motion is easy. Simply import the `motion` component and wrap your component with it:

```jsx
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.div
      animate={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      My animated component
    </motion.div>
  )
}
```

## Using Animations from Framer Motion

Framer Motion provides a number of pre-built animations that you can use in your components. For example, the AnimatePresence component allows you to animate components when they are added or removed from the DOM:

```jsx
import { AnimatePresence, motion } from "framer-motion";

const MyComponent = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          My animated component
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

## Conclusion

In conclusion, learning Framer Motion has been an exciting and rewarding experience for me. I've learned how to use Framer Motion to add fluid and dynamic animations to my React components, which has helped to enhance the user experience of my applications.

Overall, Framer Motion is a powerful tool that can help to take your web development skills to the next level. With its ease of use and extensive documentation, it's easy to get started with and start creating amazing animations in no time.

I highly recommend giving Framer Motion a try and exploring its many features and possibilities. It's a great addition to any web developer's toolkit.

For more information on Framer Motion, be sure to check out the official [documentation](https://www.framer.com/motion/).


## After completing this where to go

- I highly recommend you to check [Pop Motion](https://popmotion.io/)
