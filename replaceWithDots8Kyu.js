var replaceDots = function(str) {
    // added the \ to escape special characters
    // added the g modifier so that replace is run for all occurences in the string
      return str.replace(/\./g, '-');
    }