function elevator(left, right, call){
    if (left == call && right == call) return 'right'
    if (left == right && right !== call) return 'right'
    let distLeft = Math.abs(call - left)
    let distRight = Math.abs(call - right)
    return distLeft < distRight ? 'left':'right' 
  }