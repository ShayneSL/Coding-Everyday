function enough(cap, on, wait) {
    return cap - wait - on < 0 ? on + wait - cap : 0;
  }