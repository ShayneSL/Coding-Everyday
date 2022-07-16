function findDifference(a, b) {
    let volumeA = a.reduce((acc,c) => acc*c,1)
    let volumeB = b.reduce((acc,c) => acc*c,1)
    return volumeA > volumeB ? volumeA-volumeB : volumeB-volumeA
  }