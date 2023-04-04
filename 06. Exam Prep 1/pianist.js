function musicManager(input) {
    let n = parseInt(input.shift());
    let pieces = {};
  
    for (let i = 0; i < n; i++) {
      let [piece, composer, key] = input.shift().split("|");
      pieces[piece] = { composer, key };
    }
  
    for (let command of input) {
      let [action, piece, composer, key] = command.split("|");
  
      switch (action) {
        case "Add":
          if (pieces.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
          } else {
            pieces[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
          }
          break;
        case "Remove":
          if (pieces.hasOwnProperty(piece)) {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
          } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
          }
          break;
        case "ChangeKey":
          if (pieces.hasOwnProperty(piece)) {
            pieces[piece].key = composer;
            console.log(`Changed the key of ${piece} to ${composer}!`);
          } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
          }
          break;
        case "Stop":
          for (let piece in pieces) {
            console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
          }
          return;
      }
    }
  }

  musicManager(
    [
      '3',
      'Fur Elise|Beethoven|A Minor',
      'Moonlight Sonata|Beethoven|C# Minor',
      'Clair de Lune|Debussy|C# Minor',
      'Add|Sonata No.2|Chopin|B Minor',
      'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
      'Add|Fur Elise|Beethoven|C# Minor',
      'Remove|Clair de Lune',
      'ChangeKey|Moonlight Sonata|C# Major',
      'Stop'  
    ]
  )