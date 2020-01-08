// Rover Object Goes Here
// ======================
let myRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
};

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(
    `New direction is ${rover.direction} and the position is x: ${rover.x} and y: ${rover.y}`
  );
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log(
    `New direction is ${rover.direction} and the position is x: ${rover.x} and y: ${rover.y}`
  );
}

function moveForward(rover) {
  console.log("moveForward was called");
  let newY = rover.y;
  let newX = rover.x;
  switch (rover.direction) {
    case "N":
      newY = newY - 1;
      break;
    case "E":
      newX = newX + 1;
      break;
    case "S":
      newY = newY + 1;
      break;
    case "W":
      newX = newX - 1;
      break;
  }
  if (newY >= 0 && newY <= 9 && newX >= 0 && newX <= 9) {
    rover.x = newX;
    rover.y = newY;
    console.log(
      `New direction is ${rover.direction} and the position is x: ${rover.x} and y: ${rover.y}`
    );

    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  } else {
    console.error(
      `The Rover can't go off the grid, you need to turn first. The direction is ${rover.direction} and the position is x: ${rover.x} and y: ${rover.y}`
    );
  }
}

function moveBackward(rover) {
  console.log("moveBackward was called");
  let newY = rover.y;
  let newX = rover.x;
  switch (rover.direction) {
    case "N":
      newY = newY + 1;
      break;
    case "E":
      newX = newX - 1;
      break;
    case "S":
      newY = newY - 1;
      break;
    case "W":
      newX = newX + 1;
      break;
  }
  if (newY >= 0 && newY <= 9 && newX >= 0 && newX <= 9) {
    rover.x = newX;
    rover.y = newY;
    console.log(
      `New direction is ${rover.direction} and the position is x: ${rover.x} and y: ${rover.y}`
    );

    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  } else {
    console.error(
      `The Rover can't go off the grid, you need to turn first. The direction is ${rover.direction} and the position is x: ${rover.x} and y: ${rover.y}`
    );
  }
}

function commands(rover, ordersList) {
  console.log(`New orders were given: ${ordersList}`);

  for (let i = 0; i < ordersList.length; i++) {
    let oneOrder = ordersList[i];
    if (
      oneOrder !== "f" &&
      oneOrder !== "b" &&
      oneOrder !== "l" &&
      oneOrder !== "r"
    ) {
      console.error(
        `${oneOrder} is not a valid command. Please enter only l, r, b, f`
      );
      return;
    }
  }

  for (let i = 0; i < ordersList.length; i++) {
    let oneOrder = ordersList[i];
    switch (oneOrder) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
    }
  }
  console.log(
    `After all commands the direction is ${rover.direction} and the position is x:${rover.x} and y:${rover.y}`
  );
  console.log(rover.travelLog);
}

commands(myRover, "rrffrrffbbf");
