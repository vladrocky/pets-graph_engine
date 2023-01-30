package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

const LevelURL = "http://localhost:3000/levels" // development
const inpLevel = 1                              // development

// сорян, пока не знаю как правильно на go сериализовывать
type (
	Level struct {
		Matrix   [][]int `json:"matrix"`
		LowLevel [][]int `json:"lowlevel"`
	}
)

func GetLevels() {
	resp, err := http.Get(LevelURL)
	if err != nil {
		log.Fatalln(err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	result, err := GetGraphByLevel(inpLevel, string(body))

	fmt.Println(result, err)
}

func GetGraphByLevel(level int, resp string) (Level, error) {
	var levels []Level

	if err := json.Unmarshal([]byte(resp), &levels); err != nil {
		return Level{}, fmt.Errorf("%w", err)
	}

	return levels[level], nil
}

func main() {}
