const scuberHq = 42;
const oneBlockInFt = 264;

function distanceFromHqInBlocks(pickupBlock){
  return Math.abs(scuberHq - pickupBlock);
}

function distanceFromHqInFeet(pickupBlock){
  return distanceFromHqInBlocks(pickupBlock) * oneBlockInFt;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * oneBlockInFt;
}

function calculatesFarePrice(start, destination){
  const freeFt = 400;
  const varRateFt = 2000;
  const varRateMoney = 0.02;
  const flatRateFt = 2500;
  const flatRateMoney = 25;
  const result = Math.abs(start - destination) * oneBlockInFt;

  if (result <= freeFt){
    return 0;
  }

  else if (result > freeFt && result <= varRateFt){
    return (result - freeFt) * varRateMoney;
  }

  else if (result > varRateFt && result <= flatRateFt){
    return flatRateMoney;
  }

  else if (result > flatRateFt){
    return "cannot travel that far";
  }
}