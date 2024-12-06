import React from 'react';
import { Modal, View, Text, StyleSheet, } from 'react-native';

interface CustomPopupModalProps {
  visible: boolean;
  message: string;
}

const CustomPopupModal: React.FC<CustomPopupModalProps> = ({ visible, message}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
   >
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.popupText}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  popupText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default CustomPopupModal;
