from pydub import AudioSegment
import wave

sound1 = AudioSegment.from_file("../sf-backend/songs/aud1")
sound2 = AudioSegment.from_file("../sf-backend/songs/aud2")
sound3 = AudioSegment.from_file("../sf-backend/songs/aud3")

combined = sound1.overlay(sound2).overlay(sound3)

combined.export("fuckedup.wav", format='wav')

print('Sup bitch')
