import _ from 'lodash'
import data from './assets/data.json'
export const transfromToList = (data) => {
  const {$ALL = [], seriesList = []} = data
  return _.flatMap($ALL, (metrics, metricKey) => {

    return _.flatMap(metrics, metric => {

      return _.flatMap(metric.value, (value, key) => { 
        return {
          eventCode: metricKey,
          value,
          unitValue: key
        }
      })
    })
  })
}

console.log(data)
export default transfromToList