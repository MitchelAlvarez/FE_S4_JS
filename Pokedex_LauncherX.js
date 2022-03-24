const fetchPokemon = () => {
    const pokeName = document.getElementById("inputName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokeInput;
    fetch(url)
      .then((res) => {
        if (res.status != "200") {
          console.log(res);
          pokeImage("./imagenes/pokesad.gif");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        let pokeImg = data.sprites.front_default;
        let pokeNm = data.name;
        let pokeTyp = data.types[0].type.name;
        let pokeMoves = null;
        let pokeMovesLength = data.moves.length;
        let pokeStats = null;
        let pokeStatsLength = data.stats.length;
        for(var i = 0; i< pokeMovesLength; i++){
            if (pokeMoves === null){
                pokeMoves = data.moves[i].move.name + '<br />';;
            }else{
                pokeMoves =  pokeMoves + data.moves[i].move.name + '<br />';
            }
            
        }
        for(var i = 0; i< pokeStatsLength; i++){
            if (pokeStats === null){
                pokeStats = data.stats[i].stat.name + ' ' + data.stats[i].base_stat +'<br />';
                
            }else{
                pokeStats =  pokeStats + data.stats[i].stat.name + ' ' + data.stats[i].base_stat +'<br />';
            }
            
        }
        document.getElementById("pokeName").innerHTML = pokeNm;        
        document.getElementById("pokeTipo").innerHTML = pokeTyp;
        document.getElementById("pMoves").innerHTML = 'Moves: <br />' + pokeMoves;
        document.getElementById("pStats").innerHTML = 'Stats: <br />' + pokeStats;
        
        pokeImage(pokeImg);
      });
  };
  
  const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
  };
  