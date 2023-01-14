package main

import (
	"io/ioutil"
	"log"
	"net/http"
)

// type Level struct {
// 	matrix   [][]int
// 	lowlevel [][]int
// }

func GetLevels() string {
	resp, err := http.Get("http://localhost:3000/levels")
	if err != nil {
		log.Fatalln(err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	//fmt.Println(string(body))

	// var data []Level

	// json.Unmarshal(body, &data)

	// for i := range data {
	// 	fmt.Println(data[i])
	// }

	result := string(body)
	return result
}
