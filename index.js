function takeANumber(currentLine, name) {
  var lineNumber = (currentLine.length + 1);
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return `Currently Serving ${katzDeliLine[0]}.`;
  katzDeliLine.shift();
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
