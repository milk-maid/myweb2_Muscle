function sayHello(name) {
  console.log("Hi " + name);
}

const sayHello1 = (name) => console.log("1 Hi " + name);

const sayHello2 = (replace, name) =>
  console.log(`2 ${replace} is not but a ${name} fellow in all his paranran`);

const sayHello3 = () => console.log("3 Hard Coded"); //automatially RETURNS the value

const sayHello4 = (name) => name + " 4 is Great returned"; //automatially RETURNS the value

const sayHello5 = (replace = `FALLBACK`, name = `VALUE`) =>
  console.log(`5 ${replace} is not but a ${name} fellow in all his paranran`);

function checkInput( cllbck, ...myStrings ) {
  let ifNoString = false;
  for (const txt of myStrings) {
    if (!txt) {
      ifNoString = true;
      break;
    }
  }
  if ( !ifNoString ) {
    cllbck();
  }
}

checkInput(
  () => {
    console.log("All NOT Empty");
  },
  "Musa",
  "scarFace",
  "Evans",
  "Dunni",
  "Faith",
  "Goodness"
);

sayHello("Musa");
sayHello1("Haroon");
sayHello2("Musa", "joyful");
sayHello3();
console.log(sayHello4("Jonah"));
sayHello5("Input", "byME");
sayHello5();
