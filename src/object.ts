export {}
let profile1: object = { name: 'Hum' }
profile1 = { birthYear: 1999 }

let profile2: {
  // 型推論から型をつける　let x:{p:型}={p:値}
  name: string
} = { name: 'Hum' }
profile2 = { name: 'Mike' }
console.log(profile2.name)
