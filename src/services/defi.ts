import axios from 'axios';
import config from '../config';

const defi = () => {
  let defiProjects: any = null;

  const setProjects = async() => {
    // NOTE: move url somewhere
    const res = await axios.get(
      `https://data-api.defipulse.com/api/v1/defipulse/api/GetProjects?api-key=${config.defipulse}`
    )

    if (res.status === 200) {
      defiProjects = res.data
      return defiProjects
    }
  }

  return {
    setProjects
  }
}

export default defi();
