// color game
let Button = document.getElementById("startGame");
Button.addEventListener("click", function(){
  alert("Entry Price 100 Rs");
  let user = prompt("Enter code:");
  if (user >= 99) {
    alert("Welcome To Qismat Ka Game");
    alert("TU Paisa Kamana Hai");
    alert("Mile Ga Zaroor Mile Ga");
    alert("Tuu Tyar Hu?");
    alert("Ready");
    alert("Set");
    alert("GO");
    alert("Choose Color From list");
    alert(
      "Red , yellow , blue , pink , green , black , skyblue , lemon , orange , gray , silver , white , wheat, darkgreen , darkblack , lightgreen , darkblue , mustard , darkmustard , softgrey , crimson , aqua , bronze , orchid , lime , navy , lightgreen"
    );
  
    let number = prompt("Enter Your Color that you want?");
    if (number === "hackbyabd" || number == 6789) {
      alert("You are Hacker");
    }
    // color
    else if (number === "red") {
      alert("Chorail");
    } else if (number === "blue") {
      alert(`You are in game`);
      let nclr = prompt("Enter new color");
      if (nclr == "green") {
        alert("You are still in game");
        let tclr = prompt(`Enter third color`);
        if (tclr == "yellow") {
          alert(`You won the game`);
        } else {
          alert(`You are out of game`);
        }
      } else {
        alert(`You are out of game`);
      }
    } else if (number === "pink") {
      alert("Pari");
    } else if (number === "green") {
      alert("Rani");
    } else if (number === "black") {
      alert("Bandar");
    } else if (number === "skyblue") {
      alert("Dayeen");
    } else if (number === "yellow") {
      alert("Phape Kutni");
    } else if (number === "lemon") {
      alert("KaliMata");
    } else if (number === "orange") {
      alert("John bane Ga Don");
    } else if (number === "gray") {
      alert("Bil batori Nasa Chori");
    } else if (number === "silver") {
      alert("Kanjoos");
    } else if (number === "white") {
      alert("Ujra Chaman");
    } else if (number === "darkgreen") {
      alert("Tida");
    } else if (number === "lightgreen") {
      alert("Chemma");
    } else if (number === "darkblue") {
      alert("Papu Bahi");
    } else if (number === "mustard") {
      alert("Tubelight");
    } else if (number === "darkmutard") {
      alert("Dholu Bholu");
    } else if (number === "darkblack") {
      alert("Doraemon");
    } else if (number === "darkgrey") {
      alert("Chota Bheem");
    } else if (number === "softgrey") {
      alert("Arey Yai tu Dhoti Khol Raha Hai");
      alert("50 crore");
    } else if (number === "crimson") {
      alert("Pendu");
    } else if (number === "aqua") {
      alert("Suzuka");
    } else if (number === "bronze") {
      alert("Geyan");
    } else if (number === "orchid") {
      alert("Fool");
    } else if (number === "Lime") {
      alert("Nobita");
    } else if (number === "wheat") {
      alert(" Nika");
    } else if (number === "navy") {
      alert(" Brave");
    } else if (number === "brown") {
      alert(" Loser");
    } else if (number === "maroon") {
      alert(" Hepo Motimus");
    } else if (number === "violet") {
      alert(" Khopri tor ");
    } else if (number === "Magenta") {
      alert(" Anaconda");
    } else if (number === "cream") {
      alert(" Hathi");
    } else if (number === "navyblue") {
      alert("Be Brave");
    } else if (number === "peach") {
      alert("Chamganddi");
    } else if (number === "navyblue") {
      alert("Dcp Chitrole");
    } else if (number === "Rust") {
      alert("Acp");
    } else if (number === "navyblue") {
      alert("Freddy");
    }
      else {
        alert("Error Code");
      }
    }    
  
  
  
  
});
