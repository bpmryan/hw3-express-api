export const validateTask = (req, res, next) => {
  const { title } = req.body;
  const errors = [];

  // check title exists
  if (!title) {
    errors.push("Title is required");
  }

  // check title length
  if (title && title.length < 3) {
    errors.push("Title must be at least 3 characters");
  }

  // check title length max
  if (title && title.length > 100) {
    errors.push("Title must be less than 100 characters");
  }

  // If errors, return 400
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // validation passed
  next();
};
