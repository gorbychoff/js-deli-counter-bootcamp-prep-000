function takeANumber(currentLine, name) {
  var lineNumber = (currentLine.length + 1);
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  katzDeliLine.splice(0,1);  
  return `Currently serving ${katzDeliLine[0]}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
