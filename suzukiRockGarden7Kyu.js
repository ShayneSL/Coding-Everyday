function rakeGarden(garden) {
    let arr = garden.split(' ')
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] != 'rock' && arr[i] != 'gravel') arr[i] = 'gravel';
     }
     return arr.join(' ');
   }