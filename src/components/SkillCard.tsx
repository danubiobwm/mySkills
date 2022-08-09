import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}
export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity  
    {...rest}
    style={[styles.buttonSkill, {marginVertical: 10}]}
    >
      <Text style={[styles.textSkill]} key={skill}>{skill}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});
