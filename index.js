function takeANumber(currentLine, name) {
  var lineNumber = (currentLine.length + 1);
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  let name = katzDeliLine[0];
  katzDeliLine.splice(0,1);  
  return `Currently serving ${name}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var i = line.length;
  if (i > 0) {
    for (let n = 0; n < i; n++){
      let arrayElement = line[i];
      arrayElement = (i + 1) + ". " + arrayElement;
      line[i] = arrayElement;
    }
    return `The line is currently: ${line}`;
  }
  else {
  return "The line is currently empty."
  }
}