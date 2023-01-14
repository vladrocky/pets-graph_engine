
const reqURL = 'http://localhost:3000/levels';



let matrix


let matrix_nodes = []
let nodes = [];
let edges = [];

axios.get(reqURL)
    .then((response) => {
        matrix = response.data
        console.log(matrix[0]);
    })
    .then(() => {
        let matrixData = document.createElement('div');
        let table = document.createElement('table');

        matrixData.style.color = '#ffffff';

        matrix[0].matrix.forEach(str => {
            let row = document.createElement('tr');
            str.forEach(val => {
                let dat = document.createElement('td')
                dat.innerText = val;
                row.appendChild(dat);
            })

            table.appendChild(row);

        });

        matrixData.appendChild(table);

        document.getElementById('app').appendChild(matrixData);

        return matrix[0].matrix
    })
    .then((data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let node = {
                id: i,
                label: i.toString(),
                "node size": 40,
            }
            nodes.push(node);

            for (let j = 0; j < data.length; j++) {

                if (data[i][j] == 1) {
                    let edge = {
                        from: i,
                        to: j,
                        arrows: "to",
                        edge_size: 10,
                    }
                    edges.push(edge);
                }
            }

        }
    })
    .then(() => {
        let data = { nodes: nodes, edges: edges };
        let options = { "physics": { "barnesHut": { "gravitationalConstant": -4000, "springConstant": 0.006, "damping": 0.02 }, "repulsion": { "nodeDistance": 600 } } };

        let container = document.getElementById('graph');
        container.style.height = "900px";
        let network = new vis.Network(container, data, options);
    })



//var nodes = new vis.DataSet([{ id: 1, label: "Log Start", "node_size": 30 }, { id: 2, label: "Event_1", "node_size": 30 }]);
//var edges = new vis.DataSet([{ from: 1, to: 2, arrows: "to", edge_size: 1 }, { from: 1, to: 3, arrows: "to", edge_size: 10 }]);

// var data = { nodes: nodes, edges: edges };
// var options = { "physics": { "barnesHut": { "gravitationalConstant": -4000, "springConstant": 0.006, "damping": 0.02 }, "repulsion": { "nodeDistance": 300 } } };

// var container = document.getElementById('graph');
// var network = new vis.Network(container, data, options);