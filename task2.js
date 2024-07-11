class ApiService {

    async fetchData(url) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async getData(url) {
        var attepmt = 0
        var reqError = ''
        while (attepmt != 3) {
            try {
                const response = await fetch(url, {
                    method: 'GET'
                })
                const data = await response.json();
                console.log('attempt: ', attepmt)
                return data;

            } catch (error) {
                reqError = error
            }

            if (reqError) {
                attepmt+=1
                continue
            } else {
                console.log('request success!')
                break
            }
        }
        if (reqError) {
            console.log('attempts finished.')
            console.log(reqError)
        }
    }
}
await
const apiService = new ApiService();
const url = 'https://fake-json-api.mock.beeceptor.com/users';

apiService.getData(url)
  .then(data => {
    console.log('Data fetched successfully:', data);
})
  .catch(error => {
    console.error('Error fetching data:', error.message);
});