function tacofy(word) {
    let a = word.toLowerCase()
    let tacoRecipe = [`shell`]
    for (i = 0; i < a.length; i++) {
      if (a[i] == `t`) tacoRecipe.push(`tomato`);
      if (a[i] == `l`) tacoRecipe.push(`lettuce`);
      if (a[i] == `c`) tacoRecipe.push(`cheese`);
      if (a[i] == `g`) tacoRecipe.push(`guacamole`);
      if (a[i] == `s`) tacoRecipe.push(`salsa`);
      if (a[i] == `a`) tacoRecipe.push(`beef`);
      if (a[i] == `e`) tacoRecipe.push(`beef`);
      if (a[i] == `i`) tacoRecipe.push(`beef`);
      if (a[i] == `o`) tacoRecipe.push(`beef`);
      if (a[i] == `u`) tacoRecipe.push(`beef`);
    }
   tacoRecipe.push(`shell`)
   return tacoRecipe
  }