package main

import (
	"fmt"
)

func main() {
	fmt.Println("starting graph core ...")

	fmt.Println("getting data by server...")

	levelsData := GetLevels()

	fmt.Println(levelsData)
}
