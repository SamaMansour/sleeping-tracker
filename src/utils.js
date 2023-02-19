export const setHeaders = () => {
  return {
    headers: {
      "x-auth-token": localStorage.getItem("token")
    }
  }
}

export const calculateAverageOfTimes = arr => {
  const totalMins = arr.reduce((total, item) => (total += +item.split(":")[1]), 0)
  const totalMinsAsHours = +(totalMins / 60).toFixed(15)

  const totalHours =
    arr.reduce((total, item) => (total += +item.split(":")[0]), 0) + totalMinsAsHours

  const average = totalHours / arr.length

  let time = new Date(0, 0)

  time.setSeconds(average * 60 * 60)

  return time.toTimeString().slice(0, 8)
}

export const splitArrayByPeriod = (arr, period) => {
  if (!arr.length) return [[]]

  let chunks = [],
    i = 0,
    n = arr.length

  while (i < n) {
    switch (period) {
      case "week":
        chunks.push(arr.slice(i, (i += 7)))
        break
      case "month":
        chunks.push(arr.slice(i, (i += 30)))
        break
      case "year":
        chunks.push(arr.slice(i, (i += 365)))
        break
      default:
        return chunks
    }
  }

  return chunks
}