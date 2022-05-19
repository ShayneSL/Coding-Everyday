function sameCase(a, b){
    if(a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()){
        return -1;
    }
    else if(a.toLowerCase() == a && b.toLowerCase() == b || a.toUpperCase() == a && b.toUpperCase() == b){
        return 1;
    }
    else {
        return 0;
    }
  }