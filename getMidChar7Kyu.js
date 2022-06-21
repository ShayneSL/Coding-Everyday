function getMiddle(s)
{
  if (s.length % 2 == 0) {
   let midTwo = ((s.substring(((s.length/2)-1),((s.length/2)+1))))
   return String(midTwo)
 }
  if (s.length % 2 != 0) {
    let mid = (s.substring(((s.length/2)),((s.length/2)+1)))
    return String(mid)
  }
}