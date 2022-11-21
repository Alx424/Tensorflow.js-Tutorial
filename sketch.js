class NeuralNetwork {




    constructor(input_nodes, hidden_nodes, output_nodes){



        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output.nodes = output.nodes;

        //initialize random weights
        this.input_weights = tf.randomNormal([this.input_nodes, this.hidden_nodes])
        this.output_weights = tf.randomNormal([this.hidden_nodes, this.output_nodes])
    }



}