from pydub import AudioSegment
import wave


def mixNewSong(x, y):
    print(x)
    print(y)

    sound1 = AudioSegment.from_file("../../../sf-backend/songs/aud1.wav")
    sound2 = AudioSegment.from_file("../../../sf-backend/songs/aud2.wav")
    sound3 = AudioSegment.from_file("../../../sf-backend/songs/aud3.wav")
    combined = sound1.overlay(sound2).overlay(sound3)
    combined.export("mixmash3.wav", format='wav')


print('Sup bitch')

mixNewSong(9, "hello")
