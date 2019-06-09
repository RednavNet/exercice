
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Header, Divider, Image, CheckBox, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ dados: JSON.parse(JSON.stringify(require('./data/data.json'))), filtros: [] });
  }


  _getImage = (image) => {
    if (image.toLowerCase().includes('ic_yoga'))
      return images.icYoga;
    else if (image.toLowerCase().includes('dance'))
      return images.dance;
    else if (image.toLowerCase().includes('bike'))
      return images.bike;
    else if (image.toLowerCase().includes('lower'))
      return images.lowerBody;
    else if (image.toLowerCase().includes('time'))
      return images.time;
    else if (image.toLowerCase().includes('upper'))
      return images.upperBody;
    else if (image.toLowerCase().includes('running'))
      return images.running;
    else if (image.toLowerCase().includes('yoga'))
      return images.yoga;
    else if (image.toLowerCase().includes('cycling'))
      return images.cycling;
    else if (image.toLowerCase().includes('bodybuilding'))
      return images.gym;
  }


  _remove = function (array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  _doFilter = () => {
    var filters = this.state.filtros;
    var exercices = this.state.dados.exercices;
    var exercicesFilter = [];

    if (filters != null && filters.length > 0) {
      exercices.forEach(exercise => {
        filters.forEach(filter => {
          if (exercise.name === filter)
            exercicesFilter.push(exercise);
        });
      });
    }

    if (exercicesFilter.length == 0)
      exercicesFilter = exercices;

    return exercicesFilter;
  }
  _press = (e, data) => {

    var filters = this.state.filtros;

    if (filters.includes(data.name))
      this._remove(filters, data.name);
    else
      filters.push(data.name);

    this.setState({ filtros: filters })
  }

  _renderFilters = ({ item, i }) => (


    <LinearGradient colors={['#7F38F4', '#F22B48']} start={{ x: 0.3, y: 0.1 }} end={{ x: 0.8, y: 0.7 }} style={styles.button} >
      <View style={{ flexDirection: 'row', width: 90, height: 90, justifyContent: 'space-around', alignItems: 'stretch' }}>
        <Image
          source={this._getImage(item.image)}
          style={{ marginLeft: 30, marginTop: 20, width: 50, height: 50, resizeMode: 'contain' }}
        />
        <CheckBox
          title={null}
          containerStyle={{ marginLeft: 20 }}
          checkedColor='green'
          checked={this.state.filtros.includes(item.name) ? true : false}
          onPress={((e) => this._press(e, item))}
        />
      </View>
    </LinearGradient>
  )
  _renderExercices = ({ item }) => (

    <View style={styles.exercicesContainer}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={styles.exerciceImage}>
          <Image
            source={this._getImage(item.image)}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
        </View >
        <View style={{ flex: 1 }}>
          <View style={{  marginLeft: 15, marginTop: 10 }}>
            <Text style={{ color: '#FEFFFF', fontSize: 20, fontFamily: "Montserrat-Medium" }}>{item.name}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./img/ic_bike.png')}
              style={[styles.exerciceItemImage, { marginLeft: 15}]}
            />
            <Text style={styles.exerciceItem}>{item.calories + ' Kcal'}</Text>
            <View
              style={{
                borderLeftColor: '#FFF',
                borderLeftWidth: 1,
                marginLeft: 2
              }}
            />
            <Image
              source={require('./img/ic_time.png')}
              style={styles.exerciceItemImage}
            />
            <Text style={styles.exerciceItem}>{item.time + ' m'}</Text>
            <View
              style={{
                borderLeftColor: '#FFF',
                borderLeftWidth: 1,
                marginLeft: 5
              }}
            />

            <Image
              source={require('./img/ic_balance.png')}
              style={styles.exerciceItemImage}
            />
            <Text style={styles.exerciceItem}>{item.weight + 'Kg'}</Text>

          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <View style={[styles.exerciceDay, { backgroundColor: item.when === 'today' ? '#19B996' : '#262F38' }]}>
              <Text style={{ textAlign: 'center', margin: 5, width: 70, color: '#FEFFFF', fontSize: 14, fontFamily: "Montserrat-Medium" }}>Hoje</Text>
            </View>
            <View style={[styles.exerciceDay, { backgroundColor: item.when === 'yesterday' ? '#FD3C29' : '#262F38' }]}>
              <Text style={{ textAlign: 'center', margin: 5, width: 70, color: '#FEFFFF', fontSize: 14, fontFamily: "Montserrat-Medium" }}>Ontem</Text>
            </View>

          </View>
        </View>
      </View>
    </View>


  )

  render() {

    var exercicesFilter = this._doFilter();

    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: '#323C47' }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MEU PERFIL', style: { color: '#fff', fontFamily: "Montserrat-Medium", fontSize: 25 } }}
          rightComponent={<Icon
            name='cog'
            type='font-awesome'
            color='#fff'
          />}

        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <View style={styles.filterContainer}>

          <FlatList
            horizontal={true}
            keyExtractor={item => item.name}
            data={this.state.dados.filters}
            renderItem={this._renderFilters}
            extraData={this.state}
          />

        </View>

        <View style={{ flex: 0.7 }}>
          <FlatList
            keyExtractor={item => item.name}
            data={exercicesFilter}
            renderItem={this._renderExercices}

          />
        </View>
      </View >


    );
  }
}
const images = {

  icYoga: require('./img/ic_yoga.png'),
  dance: require('./img/ic_dance.png'),
  upperBody: require('./img/ic_upper_body.png'),
  lowerBody: require('./img/ic_lower_body.png'),
  balance: require('./img/ic_balance.png'),
  bike: require('./img/ic_bike.png'),
  time: require('./img/ic_time.png'),
  running: require('./img/running.png'),
  cycling: require('./img/cycling.png'),
  gym: require('./img/gym.png'),
  yoga: require('./img/yoga.png'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262F38',
  },
  filterContainer: {
    backgroundColor: '#FEFFFF50',
    flex: 0.2,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  exercicesContainer: {
    backgroundColor: '#FEFFFF20',
    borderRadius: 10,
    width: '95%',
    height: 115,
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  exerciceImage: {
    marginLeft: 5,
    borderRadius: 120,
    backgroundColor: '#262F38',
    width: 40,
    height: 100,
    flex: 0.4,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  exerciceItem: {
    color: '#FEFFFF',
    fontSize: 14,
    fontFamily: "Montserrat-Medium"
  },
  exerciceDay: {
    marginLeft: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FEFFFF'
  },
  exerciceItemImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 5
  },
  button: {
    borderRadius: 100,
    margin: 5,
    flexDirection: 'row'

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
