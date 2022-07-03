function stairsIn20(s){
    let flat = s.flat()
    let oneYearTotal = flat.reduce((a,c) => a+c)
    return 20*oneYearTotal
  }