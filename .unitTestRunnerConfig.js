module.exports = {
  files: [
    {
      "type": "lib",
      "files": []
    },
    {
      "type": "mock",
      "files": []
    },
    {
      "type": "src",
      files: [
        "src/imports/**/!(*spec).js"
      ]
    },
    {
      type: "specs",
      files: [
        "src/imports/**/*spec.js"
      ]
    }
  ]
};
