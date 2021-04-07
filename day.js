function day_name(date) {
  const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return day_name = days_of_the_week[date.getDay()]
}

function greeting(date) {
  return `Hello world! Happy ${day_name(date)}!`
}
