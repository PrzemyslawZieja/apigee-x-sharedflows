function jwtCheck(input){
  if(input !== null){
      return input.includes('.', 6);
  }
  return false;
}

var autorization_header = context.getVariable('request.header.authorization');
var is_jwt = jwtCheck(autorization_header);
context.setVariable('is_jwt', is_jwt);