import React, { Component } from 'react';
import {Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {


    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <ScrollView>
                <Card  wrapperStyle={{margin: 20}} title="Contact Information">
   
                    <Text style={{margin: 10}}>
                        1 Nucamp Way {"\n"}
                        Seattle, WA 98001 {"\n"}
                        U.S.A. {"\n"}
                        </Text>
                        <Text style={{margin: 10}}>                
                        Phone: 1-206-555-1234{"\n"}
                        Email: campsites@nucamp.co
                       </Text>
          
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;