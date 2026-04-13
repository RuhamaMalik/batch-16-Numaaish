 const checkAge = (req, res, next) => {

  const age = req.query.age;
  if (!age) {
    res.json({ message: 'Age is Required!', success: false });
  } else if (age < 18) {
    res.json({ message: 'You cannot access the content!', success: false })
  } else {
    req.country = 'pakistan';
    next();
  }
}

const gender = (req, res, next) => {
  // console.log(req.country);

  const gender = req.query.gender;
  if (!gender) {
    res.json({ message: 'Gender is Required!', success: false });
  } else if (gender.toLowerCase() !== 'female') {
    res.json({ message: 'Only Queen can access the content!', success: false });
  } else {
    next();
  }
}

 const checkCountry = (req, res, next) => {
  const country = req.country;  
  if (!country) {
    res.json({ message: 'Oops somthing went wrong', success: false });
  } else if (country.toLowerCase() !== 'pakistan') {
    res.json({ message: 'Access denied!', success: false });
  } else {
    next();
  }
}

module.exports = {checkAge,gender,checkCountry}
