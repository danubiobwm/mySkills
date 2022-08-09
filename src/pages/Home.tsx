import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillDataProps {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillDataProps[]>([]);

  const handlenewAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Danubio</Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button
          onPress={handlenewAddNewSkill}
          title={'Add'}
          activeOpacity={0.7}
        />

        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
          <SkillCard skill={item.name}  onPress={()=>handleRemoveSkill(item.id)}/>
        }
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    backgroundColor: '#1f1e25',
    color: '#FFF',
    borderRadius: 8,
  },
});
