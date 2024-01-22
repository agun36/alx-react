module.exports = {
  StyleSheet: {
    create: jest.fn().mockImplementation(styles => styles),
  },
  css: jest.fn().mockImplementation(style => style),
};
